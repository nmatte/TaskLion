json.partial! 'api/taskers/tasker', tasker: @tasker
json.available_tasks do
  json.array! @tasker.available_tasks do |task|
    json.partial! 'api/available_tasks/available_task', available_task: task
  end
end
json.reviews @tasker.reviews
