import Image from "next/image";

const teamMembers = [
  { name: "Karthikeyan", role: "Lead Web Developer & DevOps Engineer", img: "/images/karthikeyan.jpg" },
  { name: "Priya", role: "Senior UI/UX Designer", img: "/images/priya.jpg" },
  { name: "Naveen", role: "Senior Security Analyst", img: "/images/naveen.jpg" },
  { name: "Shree", role: "Senior Business Analyst", img: "/images/shree.jpg" },
  { name: "Sushmita", role: "Senior Systems & Quality Assurance Analyst", img: "/images/sushmita.jpg" },
  { name: "Gokul", role: "Senior Quality Assurance Tester & Maintenance Engineer", img: "/images/gokul.jpg" }
];

export default function TeamSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image className="rounded-full" src={member.img} width={100} height={100} alt={member.name} />
          <h2 className="text-xl font-bold mt-2">{member.name}</h2>
          <p className="text-gray-600 text-sm">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
