// counter/screens/CounterScreen.tsx
import CounterCard from '@/src/features/counter/components/CounterCard';
import { decrement, increment, reset, selectCounterValue } from '@/src/features/counter/state/counterSlice';
import type { AppDispatch } from '@/src/store/index'; // ⬅️ adjust path if needed
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';



export default function CounterScreen() {
    const value = useSelector(selectCounterValue);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <View style={{ flex: 1, padding: 16, justifyContent: 'center', backgroundColor: '#f8fafc' }}>
            <Text style={{ fontSize: 22, fontWeight: '600', textAlign: 'center', marginBottom: 16 }}>
                Counter
            </Text>

            <CounterCard
                value={value}
                onIncrement={() => dispatch(increment())}
                onDecrement={() => dispatch(decrement())}
                onReset={() => dispatch(reset())}
            />
        </View>
    );
}