class MessagesController < ApplicationController
  def index
    @messages = Message.all
    respond_to do |format|
      format.json { render request.format.to_sym => @messages }
    end
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.create(message_params)
  end

  private

  def message_params
    params.require(:message).permit(:title, :body)
  end
end
