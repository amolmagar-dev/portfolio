const Home = ({ theme }) => (
  <div className="p-6">
    <h1 className={`text-3xl font-bold mb-4 ${theme.activeText}`}>
      Welcome to My Portfolio
    </h1>
    <p className={`mb-6 ${theme.text}`}>
      Hi, I'm Amol Magar 👋
      <br />
      Full Stack Developer with 2+ years of experience in building scalable web applications
    </p>

    <div className={`${theme.explorer} p-4 rounded-md border ${theme.border} mb-6`}>
      <h2 className={`text-xl font-semibold mb-3 ${theme.highlightText}`}>
        Summary
      </h2>
      <p className={`${theme.text} mb-4`}>
        Full-stack engineer with over 2+ years of experience crafting full-stack applications.
        Adept at utilizing React, Node.js, Postgres, and MongoDB to build robust and scalable solutions.
        Proven ability to handle the entire software development lifecycle, from concept to deployment.
      </p>
    </div>

    <div className={`${theme.explorer} p-4 rounded-md border ${theme.border}`}>
      <h2 className={`text-xl font-semibold mb-3 ${theme.highlightText}`}>
        Featured Projects
      </h2>
      <div className="space-y-4">
        <div className={theme.text}>
          <h3 className="font-medium">Vessel Voyage Management Platform</h3>
          <p className="text-sm opacity-80">Reduced manual intervention by 40%</p>
        </div>
        <div className={theme.text}>
          <h3 className="font-medium">Online Vessel Audit System</h3>
          <p className="text-sm opacity-80">Digitized paper-based audit processes</p>
        </div>
        <div className={theme.text}>
          <h3 className="font-medium">Document Management System</h3>
          <p className="text-sm opacity-80">Reliable shore-to-vessel document syncing</p>
        </div>
      </div>
    </div>
  </div>
);

export default Home
