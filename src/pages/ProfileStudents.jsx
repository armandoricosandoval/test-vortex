import { useSelector } from "react-redux";
import Sidebar from "../assets/Sidebar";

const ProfileStudents = () => {
  const authState = useSelector((state) => state.auth);
  return (
    <div className="flex flex-row mx-auto">
      <Sidebar />
      <div
        id="ProfileRoot"
        className=" bg-white flex flex-col gap-12 w-full items-start pt-8 pb-5 px-8"
      >
        <div className="flex flex-row justify-between w-full items-start">
          <div className="flex flex-row gap-5 w-1/2 items-start">
            <div
              id="Avatar"
              className="bg-[#cfcbf3] flex flex-row w-16 items-start rounded-[32px]"
            >
              <div className="bg-[url(https://file.rendit.io/n/C8iqydi42IDJTNEZdzA3.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-end w-16 h-16 items-start pt-px px-px">
                <div className="border-solid border-white bg-[#dee1e6] mt-12 w-4 h-4 border-2 rounded-lg" />
              </div>
            </div>
            <div className="flex flex-col mt-1 w-3/5  items-start">
              <div className="text-sm  leading-[22px] text-[#6e7787]">
                Customer
              </div>
              <div className="text-2xl leading-[36px] text-[#171a1f]">
                {authState.currentUser && authState.currentUser.email}
              </div>
            </div>
          </div>
          <button
            id="IconButton"
            className="bg-[#eaecef] flex flex-row mt-3 w-8 h-8 cursor-pointer items-start pt-2 px-2 rounded-lg"
          >
            <img
              src="https://file.rendit.io/n/9HwMIqgFKlFkioijPTHs.svg"
              alt="Edit"
              id="Edit"
              className="w-5"
            />
          </button>
        </div>
        <div className="flex flex-col gap-16 w-full items-start">
          <div className="flex flex-row w-full items-start px-px">
            <div className="flex flex-col justify-between mt-5 w-3/4 h-24  items-start">
              <div className="flex flex-row gap-3 w-3/5 items-start">
                <img
                  src="https://file.rendit.io/n/iWFyApuPvbshRbdjXUbu.svg"
                  alt="AtSign"
                  id="AtSign"
                  className="mt-1 w-4"
                />
                <div className="text-sm font-semibold leading-[22px] text-[#323842]">
                  {authState.currentUser && authState.currentUser.email}
                </div>
              </div>
              <div className="flex flex-row gap-3 w-1/2 items-start">
                <img
                  src="https://file.rendit.io/n/bCwkleddWEnvdytH4Jks.svg"
                  alt="Phone"
                  id="Phone"
                  className="mt-1 w-4"
                />
                <div className="text-sm font-semibold leading-[22px] text-[#323842]">
                  (719) 810-9073
                </div>
              </div>
              <div className="flex flex-row gap-3 w-full  items-start">
                <img
                  src="https://file.rendit.io/n/3N6T16NNYkxo6qOTaHiX.svg"
                  alt="Office"
                  id="Office"
                  className="mt-1 w-4"
                />
                <div className="text-sm font-semibold leading-[22px] text-[#323842]">
                  Hill Commercial Company Limited
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full  items-start">
            <div className="flex flex-row ml-px gap-16 w-3/5 items-start">
              <div className="text-sm leading-[22px] text-[#6e7787] mt-px">
                Tags
              </div>
              <div
                id="Tag4"
                className="bg-black/0 flex flex-row gap-1 w-3/5 items-start"
              >
                <div className="text-xs leading-[18px] text-[#323842] bg-[#f3f4f6] flex flex-row w-10 items-start pt-1 px-2 rounded">
                  Lead
                </div>
                <div className="text-xs leading-[18px] text-[#323842] bg-[#f3f4f6] flex flex-row w-20 items-start pt-1 px-2 rounded">
                  Long-term
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 w-2/5 items-start mb-px ml-px">
              <div className="text-sm leading-[22px] text-[#6e7787]">
                Timezone
              </div>
              <div className="text-sm leading-[22px] text-[#171a1f]">UTC-7</div>
            </div>
            <div className="flex flex-col gap-12 w-full  items-start">
              <div className="flex flex-row ml-px gap-8 w-3/4 items-start">
                <div className="text-sm leading-[22px] text-[#6e7787]">
                  Followers
                </div>
                <div className="text-sm leading-[22px] text-[#171a1f]">
                  English (United States)
                </div>
              </div>
              <div className="flex flex-col gap-5 w-full  items-start max-w-96">
                <div className="flex flex-row gap-6 w-full md:w-1/2 items-start">
                  <div className="text-sm leading-[22px] text-[#323842]">
                    Investigation History
                  </div>
                  <div className="text-right text-sm leading-[22px] text-[#9095a0]">
                    02
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full items-start">
                  <div
                    id="Container"
                    className="border-solid border-[#dee1e6] bg-white flex flex-col md:flex-row gap-6 w-full h-16 items-start pt-3 pl-1 pr-2 border rounded"
                  >
                    <div className="flex flex-row gap-3 md:w-3/5 items-start">
                      <div
                        id="Tag"
                        className="bg-black/0 flex flex-row w-10 items-start"
                      >
                        <div className="bg-[#fef2f1] flex flex-row justify-center pt-2 w-10 h-10 items-start rounded-[22px]">
                          <img
                            src="https://file.rendit.io/n/9qQ3AW7zQdqGuQ3EvFCI.svg"
                            alt="Bill"
                            id="Bill"
                            className="w-6"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col mt-px w-full md:w-3/4  items-start">
                        <div className="text-sm font-semibold leading-[22px] text-[#323842]">
                          Order #120384
                        </div>
                        <div className="text-xs leading-[20px] text-[#9095a0]">
                          Invoice date: May 29, 2022
                        </div>
                      </div>
                    </div>
                    <div
                      id="Tag1"
                      className="bg-black/0 flex flex-row mt-2 md:mt-0 w-full md:w-20 items-start"
                    >
                      <div className="text-xs  leading-[18px] text-[#379ae6] bg-[#f1f8fd] flex flex-row w-full md:w-20 items-start pt-1 px-2 rounded-lg">
                        · Delivering ·
                      </div>
                    </div>
                  </div>
                  <div
                    id="Container1"
                    className="border-solid border-[#dee1e6] bg-white flex flex-col md:flex-row gap-6 w-full h-16 items-start pt-3 px-1 border rounded"
                  >
                    <div className="flex flex-row gap-3 md:w-3/5 items-start">
                      <div
                        id="Tag2"
                        className="bg-black/0 flex flex-row w-10 items-start"
                      >
                        <div className="bg-[#f3fbf8] flex flex-row justify-center pt-2 w-10 h-10 items-start rounded-[22px]">
                          <img
                            src="https://file.rendit.io/n/TKXDSda8cng0fHXlJUSu.svg"
                            alt="Bill1"
                            id="Bill1"
                            className="w-6"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col mt-px w-full md:w-3/4  items-start">
                        <div className="text-sm font-semibold leading-[22px] text-[#323842]">
                          Order #120189
                        </div>
                        <div className="text-xs leading-[20px] text-[#9095a0]">
                          Invoice date: Feb 13, 2022
                        </div>
                      </div>
                    </div>
                    <div
                      id="Tag3"
                      className="bg-black/0 flex flex-row mt-2 w-full md:w-16 items-start"
                    >
                      <div className="text-xs  leading-[18px] text-[#117b34] bg-[#eefdf3] flex flex-row w-full md:w-16 items-start pt-1 px-2 rounded-lg">
                        · Success ·
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStudents;
