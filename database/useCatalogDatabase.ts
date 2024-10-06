import { CatalogProps } from '@/interfaces';
import { useSQLiteContext } from 'expo-sqlite';

export function useCatalogDatabase() {
    const database = useSQLiteContext();

    async function create(param: Omit<CatalogProps, "id">) {
        const statement = await database.prepareAsync(
            'INSERT INTO catalog (name, lifeTime, plantTime, cultivation, warning) VALUES ($name, $lifeTime, $plantTime, $cultivation, $warning)'
        );

        try {
            const result = await statement.executeAsync({
                $name: param.name,
                $lifeTime: param.lifeTime,
                $plantTime: param.plantTime,
                $cultivation: param.cultivation,
                $warning: param.warning
            });

            const insertedRowId = result.lastInsertRowId.toLocaleString();

            return { insertedRowId };
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }

    async function getAll() {
        const data: Array<CatalogProps> = await database.getAllAsync('SELECT * FROM catalog');

        return data;
    }

    async function getAsOption() {
        const data: Array<CatalogProps> = await database.getAllAsync('SELECT * FROM catalog');

        const options = data.map((item) => ({name: item.name, id: item.id}));

        return options;
    }

    return { create, getAll, getAsOption }
}