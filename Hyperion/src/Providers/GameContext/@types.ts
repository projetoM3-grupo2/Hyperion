export interface ICategories {
    categoryId: number,
    label: string,
    slug: string

}
export interface IGames {
    id: number,
    name: string,
    categories: ICategories
}

export interface IGameContext {
    games: IGames[],
}

