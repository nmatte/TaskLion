json.array! @available_tasks do |available_task|
  json.partial! 'api/available_tasks/available_task', available_task: available_task
end
