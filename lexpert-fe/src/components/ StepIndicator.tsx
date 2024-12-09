interface Props {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator: React.FC<Props> = ({
  currentStep,
  totalSteps,
}) => (
  <div className="flex justify-center items-center mb-6">
    {Array.from({ length: totalSteps }, (_, i) => (
      <div key={i} className="flex items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            i + 1 <= currentStep
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {i + 1}
        </div>
        {i < totalSteps - 1 && (
          <div
            className={`h-1 w-12 ${
              i + 1 < currentStep ? "bg-purple-600" : "bg-gray-200"
            }`}
          />
        )}
      </div>
    ))}
  </div>
);
