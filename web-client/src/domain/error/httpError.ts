export enum ErrorCode {
  NO_ITEMS_FOUND = 'ML_100',
  SOCKET_ERROR = 'SOCKET_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export class HttpError extends Error {
  public readonly errorCode: ErrorCode;
  public readonly errorMessage: string;

  constructor(errorCode: ErrorCode, errorMessage: string) {
    super(errorMessage);

    Object.setPrototypeOf(this, new.target.prototype);

    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
    Error.captureStackTrace(this);
  }
}
