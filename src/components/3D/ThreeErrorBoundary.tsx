"use client";

import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: () => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error boundary specifically for 3D components
 * Gracefully handles WebGL and Three.js related errors
 */
export default class ThreeErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Log error for debugging
    console.warn("3D Component Error:", _error, _errorInfo);

    // Check if it's a WebGL related error
    if (
      _error.message.includes("WebGL") ||
      _error.message.includes("THREE") ||
      _error.message.includes("S")
    ) {
      console.warn("WebGL/Three.js error detected. 3D background disabled.");
    }

    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError();
    }
  }

  render() {
    if (this.state.hasError) {
      // Return the provided fallback or null
      return this.props.fallback || null;
    }

    return this.props.children;
  }
}
