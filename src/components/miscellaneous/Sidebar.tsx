const Sidebar = () => {
  return (
    <div className="w-1/4 bg-slate-800 text-white">
      <div className="flex flex-col h-[90vh] items-center py-10 gap-4">
        <div className="text-xl w-[80%] bg-red-500 p-2 text-center rounded-lg">
          Home
        </div>
        <div className="text-xl w-[80%] bg-red-500 p-2 text-center rounded-lg">
          Liked Videos
        </div>
        <div className="text-xl w-[80%] bg-red-500 p-2 text-center rounded-lg">
          History
        </div>
        <div className="text-xl w-[80%] bg-red-500 p-2 text-center rounded-lg">
          My Channel
        </div>
        <div className="text-xl w-[80%] bg-red-500 p-2 text-center rounded-lg">
          Subscriptions
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
