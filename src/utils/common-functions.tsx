export const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Sooraj-CV.pdf';
  link.download = 'Sooraj_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
