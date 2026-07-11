function calculateProfileCompletion(profile) {

  let total = 0;
  let completed = 0;

  const fields = [
    profile.personal?.fullName,
    profile.personal?.email,
    profile.personal?.mobile,
    profile.personal?.location,
    profile.personal?.summary,

    profile.preferences?.preferredRole,
    profile.preferences?.expectedSalary,
    profile.preferences?.workMode
  ];

  total += fields.length;

  fields.forEach(field => {
    if (field && field.toString().trim() !== "") {
      completed++;
    }
  });

  total++;
  if (profile.experience?.length > 0) completed++;

  total++;
  if (profile.education?.length > 0) completed++;

  total++;
  if (profile.skills?.length > 0) completed++;

  total++;
  if (profile.resume?.fileUrl) completed++;

  const percentage = Math.round((completed / total) * 100);

  let message = "";

  if (percentage === 100) {
    message = "Your profile is complete.";
  } else if (percentage >= 80) {
    message = "Your profile is almost ready for automation.";
  } else if (percentage >= 50) {
    message = "Complete a few more details to improve your profile.";
  } else {
    message = "Complete your profile to start automated job applications.";
  }

  return {
    percentage,
    message
  };
}

module.exports = calculateProfileCompletion;