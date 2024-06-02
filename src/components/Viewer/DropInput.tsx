import React, { useState, DragEvent } from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../common/Icons';

interface DragAndDropImageProps {
    onDrop: (files: File) => void;
}

const DragAndDropImage: React.FC<DragAndDropImageProps> = ({ onDrop }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            const file = event.dataTransfer.files[0];
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
            onDrop(file);
        }
    };

    const handleClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
            const target = event.target as HTMLInputElement;
            if (target.files && target.files.length > 0) {
                const file = target.files[0];
                const previewUrl = URL.createObjectURL(file);
                setImagePreview(previewUrl);
                onDrop(file);
            }
        };
        input.click();
    }

    return (
        <div onClick={handleClick}>
            {!imagePreview ? (
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: isDragging ? 1.05 : 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className='viewer__drop'
                >
                    <Icons.mail size={48} color="#2188FF" />
                    <p>Adicionar imagem do Ativo</p>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='viewer__drop'
                >
                    <img
                        src={imagePreview}
                        alt="Preview"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                    <Icons.trash
                        size={16}
                        color="#F00"
                        style={{ position: 'absolute', bottom: 8, right: 8, cursor: 'pointer' }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setImagePreview(null);
                        }}
                    />
                </motion.div>
            )}
        </div>
    );
};

export { DragAndDropImage };
