"use client";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Pagination from "./pagination";

const queryClient = new QueryClient();

export type InternshipProps = {
  code: number;
  data: {
    intern: [
      {
        id: string;
        category: string;
        content: {
          name: string;
          position: string;
          img_url: string;
          school: string;
        };
        points: string;
      }
    ];
    totalPage: number;
    lastPage: true;
  };
};

export default function ListInternship() {
  return (
    <QueryClientProvider client={queryClient}>
      <ListMember />
    </QueryClientProvider>
  );
}

function ListMember() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showModal, setShowModal] = useState(false);
  const { isLoading, error, data } = useQuery<InternshipProps>({
    queryKey: [currentPage],
    queryFn: async () => {
      const { data: apiData } = await axios(
        `/api/internship?page=${currentPage}`
      );
      return apiData;
    },
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  console.log(data);
  console.log(error);
  console.log(showModal);
  return (
    <section className="mt-[20px] grid grid-cols-2 gap-[30px] justify-items-center w-full">
      {isLoading ? (
        <h1 className="text-center">Loading . . .</h1>
      ) : (
        <>
          {data?.data.intern.map((item: any, index: number) => (
            <section className="w-[400px]" key={index}>
              <div className="flex gap-[15px]">
                <div className="gap-[10px] flex items-center">
                  <div>
                    <Image
                      src={item.content.img_url}
                      alt=""
                      className="rounded-[100%]"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold mb-[5px]">
                      {item.content.name}
                    </h1>
                    <p className="text-[15px]">{item.content.school}</p>
                    <p className="text-[15px]">{item.content.position}</p>
                    <p className="text-[15px]">Points: {item.points}</p>
                    <div className="flex gap-[10px] items-center">
                      <button>
                        <RiDeleteBinLine className="text-red-500" size={20} />
                      </button>
                      <label htmlFor={`my-modal-${index + 1}`} className="btn">
                        <FaRegEdit className="text-blue-500" size={20} />
                      </label>

                      {/* Put this part before </body> tag */}

                      <input
                        type="checkbox"
                        id={`my-modal-${index + 1}`}
                        className="modal-toggle"
                      />
                      <div
                        className="modal flex flex-col justify-center"
                        role="dialog"
                      >
                        <form className="modal-box flex flex-col gap-[10px] justify-center">
                          <input
                            type="text"
                            placeholder="Type here"
                            value={item.content.name}
                            className="input input-bordered input-info w-full "
                          />
                          <input
                            type="text"
                            value={item.content.school}
                            className="input input-bordered input-info w-full "
                          />
                          <input
                            type="text"
                            value={item.content.position}
                            className="input input-bordered input-info w-full"
                          />
                          <input
                            type="text"
                            value={item.content.img_url}
                            className="input input-bordered input-info w-full"
                          />
                          <div className="modal-action">
                            <label
                              htmlFor={`my-modal-${index + 1}`}
                              className="btn"
                            >
                              Close!
                            </label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={Number(data?.data.totalPage)}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
