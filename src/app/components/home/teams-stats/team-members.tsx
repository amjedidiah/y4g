import { Individual } from "@/lib/types";

type Props = {
  teamName: string;
  teamMembers?: Individual[];
};

export default function TeamMembers({ teamName, teamMembers }: Props) {
  if (!teamMembers) return;

  return (
    <div className="max-lg:order-3 lg:col-span-2 flex flex-col gap-3">
      <h2 className="text-3xl lg:text-4xl font-semibold">{teamName} Members</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {teamMembers.map(({ email, name, phone }) => (
          <div
            className="flex flex-col gap-1 shadow-lg p-3 rounded-sm"
            key={phone}
          >
            <p className="capitalize font-semibold">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
