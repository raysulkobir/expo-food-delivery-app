import OnboardingScreens from "@/src/features/onboarding/screens/OnboardingScreens";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
 <SafeAreaView>
      <p className="text-lg font-medium">Welcome to Tailwind</p>
      <OnboardingScreens/>
 </SafeAreaView>
  );
}
