"use client";
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
    // Tambahkan logika untuk memuat data halaman baru dari API
  };
  console.log(data);
  console.log(error);
  return (
    <section className="mt-[20px] grid grid-cols-2 gap-[30px] justify-items-center w-full">
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
              </div>
            </div>
          </div>
        </section>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={Number(data?.data.totalPage)}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
