class ProjectController < ApplicationController
  def index
  	@projects = Project.all
  	@project = Project.new
  end

  def create
  	@project = Project.new(project_params)
  	# project_params is in strong parameters in the private method 

  	respond_to do |format|
  		if @project.save
  			# if the project is saved then
  			# response should be a javascript view
  			# will be found in views/project/create.js.erb
  			format.js
  		else
  			# else the response should be in json if it is 
  			# not possible to save
  			format.json {render json: @project.errors.messages, status: :unprocessable_entity}
  		end
  	end
  end

  private 
  def project_params
  	params.require(:project).permit(:name, :description)
  	# used as a safety precaution to filter out what 
  	# parameters will be received through the modal from 
  	# users
  	# Prevents unwanted input, rails also automatically stops it from modifying
  	# the database if strong paramets are not set in place
  end
end
