import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export function getErrorMessage(error: FetchBaseQueryError | SerializedError): string {
  if ('status' in error) {
    if (typeof error.data === 'object' && error.data && 'error' in error.data) {
      return (error.data as { error: string }).error;
    }
    return `Server error with status ${error.status}`;
  }

  if ('message' in error) {
    return error.message ?? '';
  }

  return 'An unknown error occurred.';
}

