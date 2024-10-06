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
}

export interface RecordProps {
    id?: string
    catalog: string
    imageURL: string[]
    createDate?: string
    comment?: string
    local?: string
}