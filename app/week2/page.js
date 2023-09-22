import StudentInfo from "../StudentInfo";
import Link from "next/link";

export default function Week2() {
    return (
        <main>
            <h1> My Shopping List</h1>
            <StudentInfo />
            <p>
                <Link href="/week3">Week 3</Link>
            </p>
        </main>
    )
}