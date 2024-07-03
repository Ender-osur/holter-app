"use client";
import Link from "next/link";
import withAuth from "../../../hoc/withAuth";
import {
  HeartIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  TriangleAlertIcon,
} from "../../components/icon";
const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full min-h-screen dark:bg-gray-800">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 bg-[#53d9bf] ">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
          prefetch={false}
        >
          <HeartIcon className="w-6 h-6" />
        </Link>
        <nav className="font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link href="#" className="text-[#e4f9f3]" prefetch={false}>
            Trends
          </Link>
          <Link href="#" className="text-[#e4f9f3]" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="text-[#e4f9f3]" prefetch={false}>
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex flex-col h-[100%] w-[100%] items-center text-[80px] text-white">
        Ruta protegida
      </main>
      <section className="grid gap-2">
        <div className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
          <CircleAlertIcon className="w-8 h-8 text-red-500" />
          <div>
            <span className="font-semibold">Atrial Fibrillation Detected</span>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Occurred at 10:23 AM
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
          <TriangleAlertIcon className="w-8 h-8 text-yellow-500" />
          <div>
            <div className="font-semibold">Bradycardia Detected</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Occurred at 2:45 PM
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
          <CircleCheckIcon className="w-8 h-8 text-green-500" />
          <div>
            <div className="font-semibold">Normal Sinus Rhythm</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Detected throughout the day
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default withAuth(Dashboard);