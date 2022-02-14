import React, { ReactNode } from 'react';

interface ConditionalVisibilityProps {
  isVisible: boolean,
  children: ReactNode
}
const ConditionalVisibility = ({
  isVisible,
  children,
}: ConditionalVisibilityProps) => (isVisible ? <>{children}</> : null);

export default ConditionalVisibility;
