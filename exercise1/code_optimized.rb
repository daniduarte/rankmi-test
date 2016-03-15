
def update_user user_data

  begin

    user = User.find_or_create_by id: user_data[:id]

    if user.save
      puts "Has been created or update user #{user.id}"

      area_id = user_data[:area].try :id # expecting data from 'user_data'
      process_id = usr_data[:process].try :id # expecting data from 'user_data'

      # Assign role
      if user.role.present? and process_id.present?
        user_role_process_data = UserRoleProcess.find_or_create_by user_id: user.id, role_id: user.role.id, enterprise_process_id: process_id

      else
        puts "Role wasn't assigned to user #{user.id}"
      end

      # Assign area
      if area_id.present?
        area = UserEnterpriseArea.find_or_create_by user_id: user.id, enterprise_area_id: area_id

        area.save

      else
        puts "Area wasn't assigned to user #{user.id}"
      end

    else
      puts "Error during creating or updating user #{user.id}. Please check!"

    end

    return user

  rescue Exception => e
    puts "Ups! It was a error. Please review the code, i've returned #{e}"
  end
end


