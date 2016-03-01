json.array! @available_tasks do |available_task|
  json.partial! 'api/taskers/tasker', tasker: available_task.tasker
  json.blurb available_task.blurb
  json.rate available_task.rate
  json.available_task_id available_task.id
end
