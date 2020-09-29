import UserError from './user-error';

export default class ProjectFileNotFoundError extends UserError {
  constructor(message: string) {
    super(`Could not find project file with path ${message}`);
    Object.setPrototypeOf(this, ProjectFileNotFoundError.prototype);
  }
}
