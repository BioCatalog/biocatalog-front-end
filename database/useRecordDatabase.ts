import { RecordProps } from '@/interfaces';
import { useSQLiteContext } from 'expo-sqlite';

export function useRecordDatabase() {
    const database = useSQLiteContext();

    async function create(param: Omit<RecordProps, "id">) {
        const statementRecord = await database.prepareAsync(
            "INSERT INTO record (catalog, createDate, comment, local) VALUES ($catalog, $createDate, $comment, $local)"
        )

        const statementImages = await database.prepareAsync(
            "INSERT INTO record (record, imageURL) VALUES ($record, $imageURL)"
        )

        try {
            const result = await statementRecord.executeAsync({
                $catalog: param.catalog,
                $createDate: param.createDate,
                $comment: param.comment,
                $local: param.local,
            });

            const insertedRowId = result.lastInsertRowId.toLocaleString();

            param.imageURL?.forEach(async (image) => {
                await statementImages.executeAsync({
                    $record: insertedRowId,
                    $imageURL: image,
                });
            })

            return { insertedRowId };
        } catch (error) {
            throw error;
        } finally {
            await statementRecord.finalizeAsync();
            await statementImages.finalizeAsync();
        }
    }

    async function getAll() {
        const data: Array<RecordProps> = await database.getAllAsync('SELECT * FROM record');

        return data;
    }

    async function getImages() {
        const data: {imageURL: string}[] = await database.getAllAsync('SELECT * FROM recordImages');

        return data;
    }

    return { create, getAll, getImages }
}