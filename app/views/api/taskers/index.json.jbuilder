json.array! @tasks do |task|
  json.partial! 'api/taskers/tasker', tasker: task.tasker
  json.blurb task.blurb
  json.rate task.rate
end
