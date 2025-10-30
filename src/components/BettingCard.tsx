import React from 'react';
import { Card, Button, Typography, Space, Progress } from 'antd';
import { ClockCircleOutlined, DollarOutlined } from '@ant-design/icons';
import styles from './BettingCard.module.css';

const { Text, Title } = Typography;

interface BettingCardProps {
  imageUrl: string;
  status: string;
  question: string;
  yesPercentage: number;
  noPercentage: number;
  participants: number;
  totalPool: string;
  endDate: string;
}

export const BettingCard: React.FC<BettingCardProps> = ({
  imageUrl,
  status,
  question,
  yesPercentage,
  noPercentage,
  participants,
  totalPool,
  endDate,
}) => {
  return (
    <Card
      className={styles.bettingCard}
      cover={
        <div className={styles.imageContainer}>
          <img alt="betting" src={imageUrl} className={styles.coverImage} />
          <div className={styles.statusBadge}>
            <div className={styles.statusDot} />
            <Text className={styles.statusText}>{status}</Text>
          </div>
        </div>
      }
      bordered={false}
    >
      <div className={styles.content}>
        <Title level={5} className={styles.question}>
          {question}
        </Title>

        <div className={styles.percentageContainer}>
          <Text className={styles.percentage}>{yesPercentage}%</Text>
          <Text className={styles.percentage}>{noPercentage}%</Text>
        </div>

        <Progress
          percent={yesPercentage}
          success={{ percent: yesPercentage }}
          strokeColor={{
            '0%': '#22d3ee',
            '100%': '#ec4899',
          }}
          showInfo={false}
          className={styles.progressBar}
        />

        <Space className={styles.buttonGroup} size={12}>
          <Button type="default" size="large" className={styles.yesButton}>
            YES
          </Button>
          <Button type="default" size="large" className={styles.noButton}>
            NO
          </Button>
        </Space>

        <div className={styles.footer}>
          <Space size={4} className={styles.footerItem}>
            <div className={styles.avatarGroup}>
              <div className={styles.avatar} style={{ background: '#fbbf24' }} />
              <div className={styles.avatar} style={{ background: '#ec4899' }} />
            </div>
            <Text className={styles.footerText}>+{participants}</Text>
          </Space>

          <Space size={16} className={styles.footerRight}>
            <Space size={4} className={styles.footerItem}>
              <DollarOutlined className={styles.footerIcon} />
              <Text className={styles.footerText}>{totalPool}</Text>
            </Space>
            <Space size={4} className={styles.footerItem}>
              <ClockCircleOutlined className={styles.footerIcon} />
              <Text className={styles.footerText}>{endDate}</Text>
            </Space>
          </Space>
        </div>
      </div>
    </Card>
  );
};
