require "spec_helper"

describe VoterMailer do
  let!(:user1) { create(:user, name: 'Jim John', email: 'user1@user.com') }
  let!(:user2) { create(:user, name: 'Bill Bob', email: 'user2@user.com') }
  let!(:user3) { create(:user, name: 'Tim Tom', email: 'user3@user.com') }

  let!(:hub1) { create(:hub, group_name: 'State of California') }

  let!(:proposal1) { create(:proposal, statement: 'P1: Taxes should be reduced by 5% in California', hub: hub1, user: user1) }

  let!(:vote1) { create(:vote, user: user1, proposal: proposal1) }
  let!(:vote2) { create(:vote, user: user2, proposal: proposal1) }
  let!(:vote3) { create(:vote, user: user3, proposal: proposal1) }

  let!(:user_id) { user1.id }
  let!(:votes_for_user) { [vote2.id, vote3.id] }

  describe 'new_vote email' do
    let(:mail) { VoterMailer.vote_notification(user_id, votes_for_user) }
    subject { mail }
    it { should deliver_to "#{user1.username} <#{user1.email}>" }
    it { should deliver_from 'Spokenvote <donotreply@spokenvote.org>' }
    #it { should have_subject "[Spokenvote] (#{project.name}) New task" }
    it { should have_body_text 'There have been new votes' }
    # it { should have_body_text user1.username }    # Not presently addressing user
    it { should have_body_text user2.username }
    it { should have_body_text user3.username }
  end
end
