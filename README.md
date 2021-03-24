# react-todolist

A todo list app built using react.

## Features
The app provides following features

* Create a task
* Mark completed
* Delete a task
* Restore task

## Views
The provides four different views

* All
  * Displays all the tasks which are not deleted
* Active
  * Displays all the active tasks which are neither completed nor deleted
* Completed
  * Displays all the completed tasks which are not deleted.
* Deleted
  * Displays all the deleted tasks irrespective of whether they are complete or incomplete.

## Interactive components
The app has following interactive components.

* New task
  * An input box for entering the name of the task to be added.
  * Tasks get added either by pressing enter key or add button
  * Clear button clears the text in input box.

* Task list
  * checkbox: checking this will mark a task completed. Disabled in delete view.
  * delete: visible in all views except delete. deletes a task.
  * restore: restores a deleted task. Visible only in delete view.

* sidebar
  * Contains sidebar items to select 4 different views.

## States maintained
* listType
  * A state variable of datatype string
  * stores the type of view that is currently active
  * Can be set by clicking on one of the items in sidebar.

* list
  * An array of JSON objects.
  * Each JSON object in the array represents a single task. It has the following properties.
    * key: A unique UUID key
    * task: Name of the task
    * completed: a boolean value to mark whether a task is completed or not.
    * deleted: a boolean value to mark whether a task is deleted or not.
      * note: we have two different properties for marking task state because, if we use a single property to mark a task( active, completed or deleted), we won't know whether the task was completed or active before deletion, if we want to restore.
