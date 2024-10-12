export interface CatalogProps {
    id: string
    name: string
    nameScientific?: string
    lifeTime?: string
    botanicalFamily?: string
    habitat?: string
    ediblePart?: string
    consumption?: string
    warning?: string
    cultivation?: string
    plantTime?: string
    record?: Array<RecordProps>
}

export interface RecordProps {
    id?: string
    catalog: string
    createDate?: string
    comment?: string
    local?: string
    imageURL: Array<RecordImagesProps>
}

export interface RecordImagesProps {
    id?: string
    record?: string
    imageURL: string
}