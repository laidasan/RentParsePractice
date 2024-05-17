/**
 * @interface
 * @public
 */
export default class ITaskFactory {

  /**
   * @abstract
   * @function createTasks
   * @returns {Array<Task>}
   */
  createTasks() {
    throw new Error('Method not implemented.');
  }
}