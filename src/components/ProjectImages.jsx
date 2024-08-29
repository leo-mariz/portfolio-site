function ProjectImages({ imageUrl, className }) {
  return (
    <div className={className}>
      <img src={imageUrl} alt="project" />
    </div>
  );
}   

ProjectImages.defaultProps = {
    imageUrl: "",
    };

export default ProjectImages;