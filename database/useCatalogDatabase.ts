import AllCatalog, { CatalogProps, RecordImagesProps, RecordProps } from '@/interfaces';
import { useSQLiteContext } from 'expo-sqlite';

export function useCatalogDatabase() {
    const database = useSQLiteContext();

    async function create(param: Omit<CatalogProps, "id">, user: string) {
        const statement = await database.prepareAsync(
            'INSERT INTO catalog (name, lifeTime, plantTime, cultivation, warning, user) VALUES ($name, $lifeTime, $plantTime, $cultivation, $warning, $user)'
        );

        try {
            const result = await statement.executeAsync({
                $name: param.name,
                $lifeTime: param.lifeTime,
                $plantTime: param.plantTime,
                $cultivation: param.cultivation,
                $warning: param.warning,
                $user: user
            });

            const insertedRowId = result.lastInsertRowId.toLocaleString();

            return { insertedRowId };
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }

    async function getAllCatalog() {
        const data: Array<CatalogProps> = await database.getAllAsync('SELECT * FROM catalog');

        return data;
    }

    async function getCatalogImage(user: string) {
        const data: CatalogProps[] = await database.getAllAsync(`SELECT * FROM catalog WHERE user = "${user}"`);
        
        if (data) {
            for (const item of data) {            
                item.record = await database.getAllAsync(`SELECT * FROM record WHERE catalog = ${item.id}`);

                if (item.record) {
                    for (const record of item.record){
                        record.imageURL = await database.getAllAsync(`SELECT * FROM recordImages WHERE record = ${record.id}`);
                    }
                }
            }
        }

        return data;
    }

    async function getAsOption(user: string) {
        const data: Array<CatalogProps> = await database.getAllAsync(`SELECT * FROM catalog WHERE user = "${user}"`);

        const options = data.map((item) => ({ name: item.name, id: item.id }));

        return options;
    }



    return { create, getAllCatalog, getAsOption, getCatalogImage }
}