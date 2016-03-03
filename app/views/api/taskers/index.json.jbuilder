json.array! @available_tasks do |available_task|
  json.id available_task.tasker_id
  json.fname available_task.tasker_fname
  json.lname available_task.tasker_lname
  json.img_url_sm available_task.tasker_img_url_sm
  json.blurb available_task.blurb
  json.rate available_task.rate
  json.available_task_id available_task.id
end
