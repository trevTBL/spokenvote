class VoterMailerController < ApplicationController

  def vote_notification
    if organize_test_email
      @recipient = User.find(@user_id)
      # votes = @vote_array.map { |vote_id| Vote.find(vote_id) }
      # vote_array.each do |vote_id|
      # votes = Vote.includes(:proposal).where(id: @vote_array)
      votes = Vote.includes(:proposal).where(id: @vote_array)
      @prop_array = []
      votes.each do |vote|
        @prop_array << vote.proposal.id
      end
      @props = Proposal.includes(:votes).where(id: @prop_array)
      @votes = []
      @props.each do |prop|
        # @prop_array << prop.id
        # @votes << prop.votes
        @votes << prop.votes.where(id: @vote_array)
      end
      # @proposals = Proposal.where(id: votes.proposal_id.to_i)
      # end
      # @votes = votes.includes(:proposal)
      if Rails.env.development?
        render layout: false, json: @votes
        # render layout: false
      else
        render status: :forbidden
      end
    end
  end

  def organize_test_email
    notify_list = NotificationBuilder.key_value_crossover(NotificationBuilder.create_notify_list)
    if notify_list.count > 0
        single_list = []
        single_list << notify_list.first
        single_list.each do |user_id, vote_array|
          @user_id = user_id
          @vote_array = vote_array
        end
    else
      @user_id = 44   # Likely need setup for dev's given test data
      @vote_array = [74, 7]
      # @vote_array = [74,7,12,10,11]
    end
  end
end