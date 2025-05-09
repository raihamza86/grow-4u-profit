
const ProfileSection = () => {
  return (
    <div className="w-full max-w-6xl relative rounded-3xl h-full bg-[radial-gradient(circle,_#FFC107,_#6dd5ed)] mx-auto flex flex-col justify-between mt-20">
      <div className="flex justify-center mt-5 absolute left-[50%] -translate-x-1/2 top-[-70px]">
        <div className="w-24 h-24 rounded-full bg-white  flex items-center justify-center shadow-lg">
          <img src="public/user.jpg" className="w-20 rounded-full" alt="logo" />
        </div>
      </div>

      <div className="w-full mt-8 px-4 sm:px-20">
        <p className="md:text-xl font-semibold text-white">Username</p>
        <p className="text-white">fakhar</p>
      </div>

      <div className="flex justify-center mt-auto text-center mb-5">
        <div>
          <p className="text-white font-semibold md:text-lg">Current Balance</p>
          <p className="text-white md:text-2xl font-bold">RS 20.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
