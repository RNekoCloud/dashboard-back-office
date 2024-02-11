import { CiSquarePlus } from "react-icons/ci";

export default function AddNewMember() {
  return (
    <>
      <label htmlFor={`add-member-modal`} className="">
        <CiSquarePlus className="text-blue-500" size={20} />
      </label>

      {/* Put this part before </body> tag */}

      <input type="checkbox" id={`add-member-modal`} className="modal-toggle" />
      <div className="modal flex flex-col justify-center" role="dialog">
        <form className="modal-box flex flex-col gap-[10px] justify-center">
          <input
            type="text"
            placeholder="Add Name"
            className="input input-bordered input-info w-full "
          />
          <input
            type="text"
            placeholder="add School"
            className="input input-bordered input-info w-full "
          />
          <input
            type="text"
            placeholder="Add Position"
            className="input input-bordered input-info w-full"
          />
          <input
            type="text"
            placeholder="Add Img Url"
            className="input input-bordered input-info w-full"
          />
          <div className="modal-action">
            <label htmlFor={`add-member-modal`} className="btn">
              Close!
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
