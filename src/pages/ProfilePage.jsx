import React from "react";
import AvatarImage from "../assets/Avatar.png";
import DemoImage from "../../public/yuvi.jpeg"
import { FaCamera } from "react-icons/fa";

const ProfilePage = () => {
  // todo: Update latter image uploading to data base
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;
      // await updateProfile({ profilepic: base64Image });
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="relative">
      {/* upper headings  */}
      <div className="profile-heading absolute">Account Settings</div>
      <div className="layout pt-[5rem]!">
        {/* main profile content  */}
        <div className="">
          {/* uppeer div of main profile area to dispaly image and name  */}
          <div className="flex gap-2">
            {/* image dispaly div  */}

            <div className="relative">
              <div className="image-div w-16 border rounded-full overflow-hidden">
                <img
                  src={DemoImage}
                  className="w-full h-full object-cover"
                  alt="Profile picture"
                />
              </div>
              {/* for the camera icon  */}
              <label
                htmlFor="profile"
                className="primary-button-color size-5 rounded-full absolute bottom-[0rem] right-[0rem] flex justify-between items-center"
              >
                <FaCamera className="text-amber-50 m-auto! size-3" />

                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            {/* email and name display div  */}
            <div className="mt-1.5!">
              <p className="text-xl">Yubraj</p>

              <p className="text-sm">yuvi@gmail.com</p>
            </div>
          </div>

          {/* lower div to dispaly the descriptions  */}
          <div className="mt-5!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            perferendis laboriosam.
          </div>
        </div>

        <svg className="mt-4!" height="2" width="100%">
          <line
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            stroke="#CBCBCB"
            stroke-width="2"
            stroke-dasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="20"
              dur="1s"
              repeatCount="indefinite"
            />
          </line>
        </svg>

        <svg className="mt-96!" height="2" width="100%">
          <line
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            stroke="#CBCBCB"
            stroke-width="2"
            stroke-dasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="20"
              dur="1s"
              repeatCount="indefinite"
            />
          </line>
        </svg>
     
      </div>
    </div>
  );
};

export default ProfilePage;
