interface ADS{
    id: number
    createdAt: string
    lastUpdatedAt: string
    image: string
    position: string
}

export interface ADS_request{
    banner: ADS[]
    getBanner: () => any;
}