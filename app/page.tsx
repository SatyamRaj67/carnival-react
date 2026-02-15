import FAQSection from "@/components/home/FAQ_Section";
import GetInvolvedSection from "@/components/home/Get_Involved_Section";
import LogoSection from "@/components/home/Logo_Section";
import RewardSection from "@/components/home/Reward_Section";
import SubmissionSection from "@/components/home/Submission_Section";
import WorkSection from "@/components/home/Work_Section";

export default function Home() {
  return (
    <>
      <LogoSection />
      <WorkSection />
      <SubmissionSection />
      <RewardSection />
      <GetInvolvedSection />
      <FAQSection />
    </>
  );
}
