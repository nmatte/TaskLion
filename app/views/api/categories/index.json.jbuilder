json.array! @categories do |category|
  json.name category.name
  json.description category.description
end
