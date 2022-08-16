export enum ErrorCode {
  NO_ITEMS_FOUND = 'ML_100',
}

export type DomainError = {
  errorCode: ErrorCode;
  errorMessage: string;
};
