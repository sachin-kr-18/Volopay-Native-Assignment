import React, { createContext, useState, useContext, ReactNode } from 'react';
import initialReimbursements ,{ Reimbursement } from '../data/reimbursements';

interface ReimbursementContextType {
    reimbursements: Reimbursement[];
    addReimbursement: (newReimbursement: Omit<Reimbursement, 'id'>) => void;
}

const ReimbursementContext = createContext<ReimbursementContextType | undefined>(undefined);

export const ReimbursementProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [reimbursements, setReimbursements] = useState<Reimbursement[]>(initialReimbursements);

    const addReimbursement = (newReimbursement: Omit<Reimbursement, 'id'>) => {
        const id = (reimbursements.length + 1).toString();
        setReimbursements([
          { id, ...newReimbursement },
          ...reimbursements, 
        ]);
      };

    return (
        <ReimbursementContext.Provider value={{ reimbursements, addReimbursement }}>
            {children}
        </ReimbursementContext.Provider>
    );
};

export const useReimbursements = () => {
    const context = useContext(ReimbursementContext);
    if (!context) {
      throw new Error('useReimbursements must be used within a ReimbursementProvider');
    }
    return context;
};

