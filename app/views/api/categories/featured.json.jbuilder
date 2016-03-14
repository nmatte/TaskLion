json.id @featured[:id]
json.name @featured[:name]
json.description @featured[:description]
json.img_url_big @featured[:img_url_big]
json.img_url_sm @featured[:img_url_sm]

json.tasks do
  json.array! @featured[:tasks] do |task|
    json.partial! 'api/tasks/task', task: task
  end
end
