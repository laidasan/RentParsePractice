import Task from './Task.js'

export default class TaskDecorator extends Task {
  /**
   * @type {Task}
   * @description 任務
   */
  _task = {}

  /**
   * @constructor
   * @param {Task} task
   */
  constructor(task) {
    super();
    this.task = task;
  }

  get task() {
    return this._task;
  }

  set task(task) {
    this._task = task;
  }

  async execute() {
    return this.task.execute();
  }

  async goToPage() {
    return this.task.goToPage();
  }
}