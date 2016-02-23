json.partial! 'api/categories/category', category: @category
json.tasks do
  json.array! @category.tasks do |task|
    json.partial! 'api/tasks/task', task: task
  end
end
