import ModuleCard from './ModuleCard';

const TrainingModules = () => {
  const modules = [
    {
      title: "Introduction to Climate Advocacy",
      description: "Learn the fundamentals of climate advocacy and how to effectively communicate climate issues.",
      duration: "45 mins",
      type: "Video Course",
      thumbnail: "https://images.unsplash.com/photo-1552799446-159ba9523315",
      downloadUrl: "#",
      videoUrl: "#"
    },
    {
      title: "Youth Leadership in Climate Action",
      description: "Develop leadership skills specifically tailored for young climate advocates.",
      duration: "60 mins",
      type: "Workshop",
      thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      downloadUrl: "#",
      videoUrl: "#"
    },
    {
      title: "Policy Making & Advocacy",
      description: "Understanding policy frameworks and effective advocacy strategies.",
      duration: "90 mins",
      type: "Masterclass",
      thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      downloadUrl: "#",
      videoUrl: "#"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {modules.map((module, index) => (
        <ModuleCard key={index} {...module} delay={index * 0.2} />
      ))}
    </div>
  );
};

export default TrainingModules;
