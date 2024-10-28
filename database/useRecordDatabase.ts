import { RecordImagesProps, RecordProps } from '@/interfaces';
import { useSQLiteContext } from 'expo-sqlite';

export function useRecordDatabase() {
    const database = useSQLiteContext();

    async function create(param: Omit<RecordProps, "id">) {
        const statementRecord = await database.prepareAsync(
            'INSERT INTO record (catalog, createDate, comment, local) VALUES ($catalog, $createDate, $comment, $local)'
        )

        const statementImages = await database.prepareAsync(
            'INSERT INTO recordImages (record, imageURL) VALUES ($record, $imageURL)'
        )

        try {
            const result = await statementRecord.executeAsync({
                $catalog: param.catalog,
                $createDate: param.createDate,
                $comment: param.comment,
                $local: param.local,
            });

            const insertedRowId = result.lastInsertRowId.toLocaleString();

            if (insertedRowId) {
                if (param.imageURL) {
                    param.imageURL.forEach(async (image) => {
                        await statementImages.executeAsync({
                            $record: insertedRowId,
                            $imageURL: image.imageURL,
                        });
                    })
                }
            }

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

    async function getById(id: number) {
        const data: RecordProps | null = await database.getFirstAsync(`SELECT * FROM record WHERE id = ${id}`);

        if (data) {
            const images: Array<RecordImagesProps> | null = await database.getAllAsync(`SELECT * FROM recordImages WHERE id = ${data.id}`);

            if (images) {
                data.imageURL = images;
            }
        }

        return data;
    }

    async function getImages() {
        const data: Array<RecordImagesProps> = await database.getAllAsync('SELECT * FROM recordImages');

        return data;
    }

    return { create, getAll, getImages, getById }
}