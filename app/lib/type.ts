export type Person = {
  firstName: string
  lastName: string
  chineseName: string
  region: string
  districtCode: number
  unitCode: number
  managerCode: number
  managerName: string
  blockingStatus: number
}

export type Reponse = {
  data: Person[]
  pagination: {
    pageNumber: number
    pageSize: number
    total: number
    totalPages: number
  }
}
